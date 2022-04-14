import React, { useEffect } from "react";
import { Layout, Button } from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import * as actions from "../../redux/actions/users";

import SideBar from "../../SideBar/SideBar";
import AddVolunteers from "./AddVolunteers/AddVolunteers";
import UpdateVolunteers from "./UpdateVolunteers/UpdateVolunteer"
const { Content } = Layout;
let value = 0;
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#DDD",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: "7px 8px !important",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function ManageVolunteers() {
  const isAddVisible = useSelector((state) => state.users.displayed);
  const isUpdateVisible = useSelector((state) => state.users.displayUpdate);
  const users = useSelector((state) => state.users.list[0]);
  const dispatch = useDispatch();

  const handleUpdate = (user) => {
     dispatch(actions.setSelectedUser(user));
     dispatch(actions.setDisplayUpdate(true));

  };
  const handleDelete = (id) => {
    dispatch(actions.deleteUser(id));
  };


  useEffect(() => {
    try {
      dispatch(actions.getAllUsers());
    } catch (e) {
      console.log("errroooor");
    }
  }, []);
  
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Button
              type="primary"
              onClick={() => dispatch(actions.setDisplayed(true))}
            >
              Add new volunteers
            </Button>
            {isAddVisible && <AddVolunteers />}
            {isUpdateVisible && <UpdateVolunteers />}

            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Cin</TableCell>
                  <TableCell>Birthday</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Center</TableCell>
                  
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {/* {users.loading && <div>Loading ... </div>} */}
              <TableBody>
                { users && users.length > 0 && 
                // !users.loading &&
                //   users.list && 
                 
                  users.map((user) => (  

                               
                       <StyledTableRow key={user?._id}>
                      <StyledTableCell> {user?.firstname}</StyledTableCell>
                      <StyledTableCell> {user?.lastname}</StyledTableCell>
                      <StyledTableCell> {user?.email}</StyledTableCell>
                      <StyledTableCell> {user?.cin}</StyledTableCell>
                      <StyledTableCell> {user?.birthday ? moment(user?.birthday).format("DD-MM-YYYY") : ''}</StyledTableCell>
                      <StyledTableCell> {user?.role}</StyledTableCell>
                      <StyledTableCell>{user?.centers}</StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleUpdate(user)}>
                          Update{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                      <IconButton onClick={() => handleDelete(user?._id)}>
                          <DeleteIcon className="btnColorDelete" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}

                  {/* {users && (  
users.map((user) => (  
   
    value = moment(user.birthday).format("DD-MM-YYYY"),
console.log('iness',moment().diff(moment(value, "DD-MM-YYYY"), 'years'))
                         
))

                  )} */}
              </TableBody>
            </Table>
          </div>
        </Content>
      </Layout>{" "}
    </Layout>
  );
}

export default ManageVolunteers;