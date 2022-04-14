import React, { useEffect, useState } from "react";
import { Layout, Button, Alert, notification } from "antd";
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
import * as actions from "../../redux/actions/centers";
import * as types from "../../redux/types";
import UpdateCenter from "./UpdateCenter/UpdateCenter";
import SideBar from "../../SideBar/SideBar";
import AddCenter from "./AddCenter/AddCenter";
import AssignVaccine from "./AssignVaccine/AssignVaccine";

const { Content } = Layout;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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

function ManageCenter() {
  const isAddVisible = useSelector((state) => state.centers.displayed);
  const isUpdateVisible = useSelector((state) => state.centers.displayUpdate);
  const isUpdateVacVisible = useSelector(
    (state) => state.centers.displayUpdateVac
  );
  const centers = useSelector((state) => state.centers);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorReducer);
  const [err, setError] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    if (error.message) {
      setError(error.message);
      setCode(error.code);
    }
  }, [error]);
  useEffect(() => {
    try {
      dispatch(actions.fetchCenters());
    } catch (e) {
      console.log("errroooor");
    }
  }, []);
  const handleUpdate = (center) => {
    dispatch(actions.setSelectedCenter(center));
    dispatch(actions.setDisplayUpdate(true));
  };
  const handleDelete = (name) => {
    dispatch(actions.deleteCenter(name));
  };

  const handleAssign = (center) => {
    dispatch(actions.setSelectedCenter(center));
    (actions.setDisplayUpdateVac(true));
  };
  const clearError = () => {
    dispatch({
      type: types.CLEAR_ERRORS,
    });
    setError("");
    setCode("");
  };
  const popUp = (type) => {
    notification[type]({
      message: code,
      description: err,
      onClose: clearError,
    });
  };
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
              Add new center
            </Button>
            {err && popUp("error")}
            {isAddVisible && <AddCenter />}
            {isUpdateVisible && <UpdateCenter />}
            {isUpdateVacVisible && <AssignVaccine />}
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Governorate</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Capacity</TableCell>
                  <TableCell>Vaccine Type</TableCell>
                  <TableCell>Vaccine Stock</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Assign Vaccine</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {centers.loading && <div>Loading ... </div>}
              <TableBody>
                {!centers.loading &&
                  centers.list &&
                  centers.list.map((center, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell> {center.name}</StyledTableCell>
                      <StyledTableCell> {center.governorate}</StyledTableCell>
                      <StyledTableCell> {center.city}</StyledTableCell>
                      <StyledTableCell>
                        {center.center_capacity}
                      </StyledTableCell>
                      <StyledTableCell>
                        {center.type_vaccine
                          ? center.type_vaccine.vaccine_type
                          : "Not assigned"}
                      </StyledTableCell>
                      <StyledTableCell>
                        {center.type_vaccine
                          ? center.number_vaccine
                          : "Not assigned"}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleUpdate(center)}>
                          Update{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleAssign(center)}>
                          Assign{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton onClick={() => handleDelete(center.name)}>
                          <DeleteIcon className="btnColorDelete" />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </Content>
      </Layout>{" "}
    </Layout>
  );
}

export default ManageCenter;
