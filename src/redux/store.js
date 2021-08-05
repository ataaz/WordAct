import { configureStore } from "@reduxjs/toolkit";
import HomepageReducer from "./HomepageRedux";
import AboutpageReducer from "./AboutpageRedux";
import BloglistingReducer from "./BlogListRedux";
import BlogDetailReducer from "./BlogDetailRedux";


export default configureStore({
  reducer: {
    Homepage: HomepageReducer,
    Aboutpage: AboutpageReducer,
    Bloglisting: BloglistingReducer,
    BlogDetail: BlogDetailReducer,
  },
});