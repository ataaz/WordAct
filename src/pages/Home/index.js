import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getHomepage } from "../../redux/HomepageRedux";
import MetaComponent from '../../components/MetaComponent';
import Intro from './Intro';
import PageLoader from '../../components/PageLoader';


function Home() {
  // Fetching State
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.Homepage);
  const { status } = useSelector((state) => state.Homepage);
  const params = useParams();

  useEffect(() => {
    ////Passing page ID reference
    if (status !== "success") {
      dispatch(getHomepage({ params }));
    }
    }, [dispatch]);

    if (status === "loading") {
      return (
          <PageLoader/>
      );
    }

    if (status === "success") {
      // console.log(page);
  }
  
  return (
    <div className="Home">
        {status === "success" ? (
          <>
          <MetaComponent title={page.yoast_head_json.og_title} description={page.yoast_head_json.og_description}/>
          <Intro/>
          
          </>
        ) : null};
    </div>
  )
}

export default Home;