/* eslint-disable react/prop-types */
import AdminNavbar from "./Admin Navbar/Navbar";
import Edit_MainCategory from "./Categories/Main_Category/Edit_Main";


import SideBar from "./Sidebar";

const Admin_Edit_mainCategory = ({ isOpen, handleTrigger }) => {
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
              <Edit_MainCategory />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Admin_Edit_mainCategory;
