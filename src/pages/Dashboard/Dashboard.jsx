import React, { useEffect, useState } from 'react';
import { SortDropdown } from '../../components/Dropdown/SortDropdown';
import { BsPlusCircle } from 'react-icons/bs';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { TitleModal } from '../../components/Modals/TitleModal';
import { ListCard } from '../../components/Cards/ListCard';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/main-icon.png';
import './Dashboard.scss';

export default function Dashboard(props) {
    const { sideBarOpen, board, saveBoard } = props;
    const [title, setTitle] = useState(board.title);
    const [listData, setListData] = useState(board.listData);
    const [showTitleModal, setShowTitleModal] = useState(false);

    const titleModalHandler = (newTitle) => {
        setTitle(newTitle);
        setShowTitleModal(false);
    }

    const handleUpdateList = (updatedCard) => {
        console.log('updatedCard:', updatedCard)
        const list = [...listData];
        for (let i = 0; i < listData.length; i++) {
            if (list[i].id === updatedCard.id) {
                list[i] = updatedCard;
            }
        }
        setListData(list);
    }

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

    useEffect(() => {
        saveBoard({ title, listData })
    }, [title, listData, saveBoard]);

    return (
        <section id='dashboard-section' style={{width: sideBarOpen ? '85%' : '97%'}}>
                <div id='dashboard-header-wrapper'>
                    <div id='company-wrapper' className='dashboard-company-title'>
                        <img src={logo} alt='task-master-logo.png' width='25px' />
                        <h1 className='logo-font-dash'>Task Master</h1>
                    </div>
                    <div id='dashboard-title-wrapper' className='dashboard-title' style={{width: sideBarOpen ? '41%' : '49%'}}>
                        <div id='dashboard-title-button' className='title-button' onClick={() => setShowTitleModal(true)}>
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div id='dashboard-actions' className='dashboard-actions'>
                        <SortDropdown />
                        <button type='button' className='main-button' onClick={handleAddList}>
                            <BsPlusCircle /> Add List
                        </button>
                        <button type='button' className='main-button' onClick={clearBoard}>
                            <RiDeleteBin2Line /> Clear Board
                        </button>
                    </div>
                </div>
                <div id='dashboard-wrapper-div' className='dashboard-wrapper-div'>
                    <div id='dashboard-content' className='dashboard-content'>
                        {listData.map((list, key) => 
                            <ListCard 
                                key={key}
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
