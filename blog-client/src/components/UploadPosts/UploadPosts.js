import React, { Component } from 'react';
import {Config} from '../../config/Config';
class UploadPosts extends Component{

    constructor(props){
        super(props)
        this.state={
            title : "",
            content : "",
            category : "",
            file : ""
        }
    }

    createPost(){
        let data = new FormData();
        let that = this;
        data.append("file", this.state.file)
        let url = Config.BASE_URL + "containers/demo/upload"
        fetch(url, {
            method: "POST",
            body: data
        }).then(function (res) {
            that.createPostData(that.state.file.name)
        }, function (e) {
            alert("Error submitting form!");
        });
    }

    createPostData(fileName){
        let obj = {
            title : this.state.title,
            content : this.state.content,
            category_id : this.state.category,
            image : fileName,
            author_id : "1"
        }
        let url = Config.BASE_URL + "posts"
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(obj)
        }).then(function (res) {
            console.log(res)
        }, function (e) {
            alert("Error submitting form!");
        });
    }

    render(){

        return(
            <div>
                <input type="text" placeholder="Title" onChange={(val)=>{this.setState({title : val.target.value})}}></input>
                <input type="text" placeholder="Content" onChange={(val)=>{this.setState({content : val.target.value})}}></input>
                <select onChange={(val)=>{this.setState({category : val.target.value})}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <input type="file" onChange={(val)=>{this.setState({file : val.target.files[0]})}}></input>
                <button onClick={this.createPost.bind(this)}>Create Post</button>
            </div> 
        )
    }
}

export default UploadPosts;