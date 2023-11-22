import React, { useEffect, useState } from 'react';
import { SortDropdown } from '../../components/Dropdown/SortDropdown';
import { BsPlusCircle } from 'react-icons/bs';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { TitleModal } from '../../components/Modals/TitleModal';
import { ListCard } from '../../components/Cards/ListCard';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/main-icon.png';
import './Dashboard.scss';

const screens = {
    small: window.matchMedia("all and (max-device-width: 640px)").matches,
    tablet: window.matchMedia("all and (min-device-width: 641px) and (max-device-width: 1024px)").matches,
};

export default function Dashboard(props) {
    const { sideBarOpen, board, saveBoard, alert } = props;
    const [title, setTitle] = useState(board.title);
    const [listData, setListData] = useState(board.listData);
    const [showTitleModal, setShowTitleModal] = useState(false);

    const titleModalHandler = (newTitle) => {
        setTitle(newTitle);
        setShowTitleModal(false);
    }

    const handleUpdateList = (updatedCard) => {
        setListData((prevList) => {
            return prevList.map((list) => {
                return list.id === updatedCard.id ? updatedCard : list;
            });
        });
    };    

    const handleAddList = () => {
        const listDataLength = listData.length;
        if (listDataLength === 0) {
            const list = [{
                id: uuidv4(),
                order: 0,
                priority: 0,
                tags: [],
                title: 'New List',
                items: [],
            }]
            setListData(list);
        } else if (listDataLength > 0) {
            const previous = [...listData];
            const previousOrder = previous[listDataLength - 1].order;
            const newList = {
                id: uuidv4(),
                order: previousOrder + 1,
                priority: 0,
                tags: [],
                title: 'New List',
                items: [],
            }
            previous.push(newList);
            setListData(previous);
        }
    }

    const clearBoard = () => {
        setTitle('My Dashboard');
        setListData([]);
    }

    const sortHandler = (option) => {
        const alertPayload = {
            id: uuidv4(),
            type: 'error',
            message: `Sorting by '${option}' is not yet available. Please check back soon for an update.`,
        };
        alert(alertPayload);
    }

    useEffect(() => {
        if (board.title !== title || board.listData !== listData) {
            saveBoard({ title, listData });
        }
    }, [board, title, listData, saveBoard]);
    

    return (
        <section 
            id='dashboard-section' 
            style={ 
                !screens.small 
                ? { width: sideBarOpen ? '85%' : '97%' } 
                : {}
            }
        >
            <div id='dashboard-header-wrapper'>
                {(!screens.tablet && !screens.small) && (
                    <div id='company-wrapper' className='dashboard-company-title'>
                        <img src={logo} alt='task-master-logo.png' width='25px' />
                        <h1 className='logo-font-dash'>Task Master</h1>
                    </div>
                )}
                <div 
                    id='dashboard-title-wrapper' 
                    className='dashboard-title' 
                    style={
                        !screens.small 
                        ? { width: sideBarOpen ? '41%' : '49%' } 
                        : {}
                    }
                >
                    <div id='dashboard-title-button' className='title-button' onClick={() => setShowTitleModal(true)}>
                        <h1>{title}</h1>
                    </div>
                </div>
                {!screens.small && (
                    <div id='dashboard-actions' className='dashboard-actions'>
                        <SortDropdown selection={sortHandler} />
                        <button type='button' className='main-button' onClick={handleAddList}>
                            <BsPlusCircle /> Add List
                        </button>
                        <button type='button' className='main-button' onClick={clearBoard}>
                            <RiDeleteBin2Line /> Clear Board
                        </button>
                    </div>
                )}
            </div>
            {screens.small && (
                <div id='dashboard-actions' className='dashboard-actions'>
                    <SortDropdown selection={sortHandler} />
                    <button type='button' className='main-button' onClick={handleAddList}>
                        <BsPlusCircle /> Add List
                    </button>
                    <button type='button' className='main-button' onClick={clearBoard}>
                        <RiDeleteBin2Line /> Clear Board
                    </button>
                </div>
            )}
            <div id='dashboard-wrapper-div' className='dashboard-wrapper-div'>
                <div id='dashboard-content' className='dashboard-content'>
                    {listData.map((list) => 
                        <ListCard 
                            key={`list-${list.id}}`}
                            id={list.id} 
                            order={list.order}
                            priority={list.priority}
                            tags={list.tags}
                            title={list.title} 
                            itemData={list.items} 
                            updateCard={handleUpdateList} 
                        />
                    )}
                </div>
            </div>
            {showTitleModal && (
                <TitleModal title={title} setTitle={titleModalHandler} />
            )}
        </section>
    )
}
