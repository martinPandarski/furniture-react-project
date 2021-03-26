import { Card, Form, Input, Button, Error } from "../../AuthForms/AuthForms";
import {useState} from 'react'
import api from '../../../services/api'

const PostReview = () => {
    const [isError, setIsError] = useState(false);
      const [personName, setPersonName] = useState("")
      const [job, setJob] = useState("");
      const [reviewText, setReviewText] = useState("");

      function postReviews(){
        const userToken = localStorage.getItem("tokens")
        const payload={
            "name":personName,
            "job":job,
            "reviewText": reviewText 
        }
        
          fetch(api.reviews,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'user-token' : `${userToken}`
            },
            body: JSON.stringify(payload)   
        })
        .then(res => res.json())
        .catch(err => {
          setIsError(true)
            
        })
       
        
    }


    return(
        <Card>
        <h2>Leave a Review</h2>
        <Form>
          <Input
            type="text"
            value={personName}
            onChange={e => {
              setPersonName(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <Input
            type="text"
            value={job}
            onChange={e => {
              setJob(e.target.value);
            }}
            placeholder="Enter your occupation"
          />
          <Input
            type="text"
            value={reviewText}
            onChange={e => {
              setReviewText(e.target.value);
            }}
            placeholder="Enter your review"
          />
          <Button onClick={postReviews}>Post the review!</Button>
        </Form>
          { isError &&<Error>The username or password provided were incorrect!</Error> }
          
  
      </Card>)
}

export default PostReview;
