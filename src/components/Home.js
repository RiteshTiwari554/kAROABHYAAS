import React from 'react'
import Navbar from './Navbar'
import StudentTemplate from './StudentTemplate';
import { student, student2 } from '../utils/data';
import ReviewTemplate from './ReviewTemplate';
import Footer from './Footer';
const Home = () => {
    let cnt = [1,2,3,4];
  return (
    
        <div className='home'>
        <Navbar/> 
       <div className='hometemp'/>
       <div className='ellipsebuffering'>
         { cnt.map((item) => <h3 className='ellipse'></h3>)
         }
       </div>
       <h3 className='topStudents'> Top Students</h3>
       <div className = 'nametemplate'>
        {
            student.map((data, index)=>{
                return(
                    <StudentTemplate key={index} {...data} />
                );
            })
        }
       </div>
      
       <h3 className='reviewhead'>Reviews</h3>
       <div className = 'reviewtemplate'>
        {
            student2.map((data, index)=>{
                return(
                    <ReviewTemplate key={index} {...data} />
                );
            })
        }
       </div>
       <div className='lastreview'>
          <p className='reviewname'>Amit Jha</p>
          <div className='reviewline'></div>
          <p className='reviewdesc'>Some review submitted by the user about the company</p>
       </div>

       <Footer />

    </div>
  )
}

export default Home