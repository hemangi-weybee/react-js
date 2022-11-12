import React, { PureComponent } from 'react'
import editImg from '../images/editImg.svg';
import deleteImg from '../images/deleteImg.svg';

class ListRow extends PureComponent {

    componentWillUnmount() {
        if(this.props.deleteTask) alert(`Deleting Task : ${this.props.taskName}`);
    }

    render() {
        return (
            <div className="listRow" id={this.props.taskID}>
                <div className="listHead">
                    <input checked={this.props.taskCompleted} className="chkTask" type="checkbox" onChange={this.props.tickHandler} />
                    <div className="title"> {
                        this.props.editID && Number(this.props.editID) === this.props.taskID ?
                            <input type="text" name="editBox" autoComplete="off" onKeyUp={this.props.editTaskName} defaultValue={this.props.taskName} /> :
                            <span className={this.props.taskCompleted ? 'strike' : ''} > {this.props.taskName} </span>
                    }
                    </div>
                </div>

                <div className="listControl">
                    {
                        this.props.editID && Number(this.props.editID) === this.props.taskID ?
                            <button onClick={this.props.cancelEditTask} className="closeModal">&times;</button> :
                            <button className="edit" onClick={this.props.editTaskHandler}>
                                <img src={editImg} alt="Edit Task" className="images" />
                            </button>
                    }
                    <button className="del" onClick={this.props.deleteTaskHandler}>
                        <img src={deleteImg} alt="Delete Task" className="images" />
                    </button>
                </div>
            </div>
        )
    }
}

export default ListRow