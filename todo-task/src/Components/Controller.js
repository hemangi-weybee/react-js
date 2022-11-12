import React, { PureComponent } from 'react'
import addImg from '../images/addImg.svg'
import searchImg from '../images/searchImg.svg'

class Controller extends PureComponent {
    render() {
        return (
            <>
                <div className="controls">
                    <div className="mainControls">
                        <button id="add" className={`${this.props.activeBtn === 0 ? "activeBtn" : ""} mainBtn`} onClick={this.props.addTaskHandler} >
                            <img src={addImg} alt="Add Task" className="images" />
                        </button>
                        <button id="search" className={`${this.props.activeBtn === 1 ? "activeBtn" : ""} mainBtn`} onClick={this.props.searchTaskHandler}>
                            <img src={searchImg} alt="Search Task" className="images" />
                        </button>
                        <div className="vl"></div>
                    </div>

                    <div className="subControls">
                        <select value={this.props.actionOpt} name="action" id="action" onChange={this.props.actionChangeHandler}>
                            <option value="0" disabled>Action</option>
                            <option value="1">Delete Selected</option>
                            <option value="2">Select All</option>
                            <option value="3">Unselect All</option>
                        </select>

                        <select value={this.props.sortOpt} name="sort" id="sort" onChange={this.props.sortChangeHandler}>
                            <option value="0" disabled>Sort</option>
                            <option value="1">A to Z</option>
                            <option value="2">Z to A</option>
                            <option value="3">Oldest</option>
                            <option value="4">Newest</option>
                        </select>

                        <div onClick={this.props.clickHandler}>
                            <button id="all" className={`${this.props.currentOpt === "all" ? "current" : ""}`}>
                                All
                            </button>
                            <button id="active" className={`${this.props.currentOpt === "active" ? "current" : ""}`}>
                                Active
                            </button>
                            <button id="completed" className={`${this.props.currentOpt === "completed" ? "current" : ""}`}>
                                Completed
                            </button>
                        </div>
                    </div>
                </div>

                <div className='esc'></div>
            </>
        )
    }
}

export default Controller