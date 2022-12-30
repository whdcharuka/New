import cx from 'classnames';
import styles from '/styles/shareitems.module.css';
import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import Footer from './Footer';

function ShareItem ()  {
    return(
        <div>
          <Head><title>Share Item</title></Head>
          <Navbar/>
        <div className="container">
            <br/><br/>
          <div  className={cx(styles["shareform-container"],)}>
            <div  className={cx(styles["shareform-container1"],)}>
            <form className="share-items-form">
               <br/>
               <h2 className={cx(styles["header-shareitems"],"text-center","mt-5")}>Fill in the details</h2>
               <hr></hr>
            <div  className={cx(styles["shareform-container2"],)}>
               <div class="mb-3">
                     <input type="Brand" placeholder="Brand" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3">
                    <input type="Model" placeholder="Model" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                    <input type="Title" placeholder="Title" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                    <input type="Description" placeholder="Description" class="form-control" id="exampleInputPassword1"/>
              </div>
              <hr></hr>
              <label>Add photo</label> 
              <div>
                      <input  type="file"></input>
              </div>
              <hr></hr>
                  <label>Contact details</label>
                   <br/>
                   <input type="Description" placeholder="Name" class="form-control" id="exampleInputPassword1"/>
                   <br/>
                   <input type="Description" placeholder="Email" class="form-control" id="exampleInputPassword1"/>
                   <br/>
                   <input type="Description" placeholder="Phone Number" class="form-control" id="exampleInputPassword1"/>
                   <br/>
                 
              </div>     
                   <div class="d-grid gap-2 col-6 mx-auto">
                       <button type="submit" class="btn btn-dark">Share Item</button>
                   </div>
                   <br/>
                  
            </form>
            </div>
          </div>
          <br/><br/>
        </div>
        <Footer/>
        </div>
    )
}

export default ShareItem;