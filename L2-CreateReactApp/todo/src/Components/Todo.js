import React, { Component } from "react";

export default class Todo extends Component {
   constructor() {
      super();
      this.state = {
         tasks: [
            { task: "Check mails", id: 1 },
            { task: "Read article", id: 2 },
            { task: "Complete HW", id: 3 },
         ],
         currentTask: "",
      };
   }
   handleChange = (e) => {
      console.log(e.target.value);
      this.setState({
         currentTask: e.target.value,
      });
   };

   handleSubmit = (e) => {
      this.setState({
         tasks: [
            ...this.state.tasks,
            { task: this.state.currentTask, id: this.state.tasks.length + 1 },
         ],
      });
   };

   handleDelete = (id) => {
      let taskArr = this.state.tasks.filter((taskobj) => {
         return taskobj.id !== id;
      });
      this.setState({
         tasks: [...taskArr],
      });
   };

   render() {
      console.log("render");
      return (
         <div>
            <input
               type="text"
               value={this.state.currentTask}
               onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
               {
                this.state.tasks.map(function (taskObj) {
                    return (
                       <div key={taskObj.id}>
                          <p>{taskObj.task}</p>
                          <button onClick={() => this.handleDelete(taskObj.id)}>
                             Delete
                          </button>
                       </div>
                    );
                 }.bind(this)
                 )
               }
            </ul>
         </div>
      );
   }
}
