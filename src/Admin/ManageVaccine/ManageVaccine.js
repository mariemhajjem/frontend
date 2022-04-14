import React, { useEffect, useState } from "react";
import { Layout, Button, notification } from "antd";
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
import * as types from "../../redux/types";
import * as actions from "../../redux/actions/vaccines";
import UpdateVaccine from "./UpdateVaccine/UpdateVaccine";
import SideBar from "../../SideBar/SideBar";
import AddVaccine from "./AddVaccine/AddVaccine";
const { Content } = Layout;

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

function ManageVaccine() {
  const isAddVisible = useSelector((state) => state.vaccines.displayed);
  const isUpdateVisible = useSelector((state) => state.vaccines.displayUpdate);
  const vaccines = useSelector((state) => state.vaccines);
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
      dispatch(actions.fetchVaccines());
    } catch (e) {
      console.log("errroooor");
    }
  }, []);
  const handleUpdate = (vaccine) => {
    dispatch(actions.setSelectedVaccine(vaccine));
    dispatch(actions.setDisplayUpdate(true));
  };
  const handleDelete = (vaccine_type) => {
    dispatch(actions.deleteVaccine(vaccine_type));
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
              Add new vaccine
            </Button>
            {err && popUp("error")}
            {isAddVisible && <AddVaccine />}
            {isUpdateVisible && <UpdateVaccine />}
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {vaccines.loading && <div>Loading ... </div>}
              <TableBody>
                {!vaccines.loading &&
                  vaccines.list &&
                  vaccines.list.map((vaccine, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell> {vaccine.vaccine_type}</StyledTableCell>
                      <StyledTableCell> {vaccine.stock}</StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleUpdate(vaccine)}>
                          Update{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton
                          onClick={() => handleDelete(vaccine.vaccine_type)}
                        >
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

export default ManageVaccine;
