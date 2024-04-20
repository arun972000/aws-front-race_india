/* eslint-disable react/prop-types */
import AdminNavbar from "./Admin Navbar/Navbar";
import Sub_Category from "./Categories/Sub_Category/sub_Category";

import SideBar from "./Sidebar";

const Admin_subCategory = ({ isOpen, handleTrigger }) => {
  return (
    <>
    <div className="admin-panel__elements">
      <div className="container-fluid custom-container-fluid">
        <div className="row d-flex">
          <SideBar isOpen={isOpen} handleTrigger={handleTrigger} />
          <div
            className={
              isOpen
                ? "col content_open admin__position"
                : "col content_close admin__position"
            }
          >
            <div className="row">
              <AdminNavbar />
              <Sub_Category/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Admin_subCategory;