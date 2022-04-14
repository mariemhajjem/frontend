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
  withStyles
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/openDays";
import {fetchCenters} from "../../redux/actions/centers";
import {fetchVaccines} from "../../redux/actions/vaccines";
import UpdateOpenDay from "./UpdateOpenDay/UpdateOpenDay";
import SideBar from "../../SideBar/SideBar";
import AddOpenDay from "./AddOpenDay/AddOpenDay";
import moment from 'moment';


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

function ManageOpenDay() {
  const isAddVisible = useSelector((state) => state.openDays.displayed);
  const isUpdateVisible = useSelector((state) => state.openDays.displayUpdate);
  const openDays = useSelector((state) => state.openDays);
  const centers =  useSelector((state) => state.centers.list);
  const vaccines =  useSelector((state) => state.vaccines.list);


  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(actions.fetchOpenDays());
      dispatch(fetchCenters());
      dispatch(fetchVaccines());
    } catch (e) {
      console.log("errroooor");
    }
  }, []);
  const handleUpdate = (openday) => {
   dispatch(actions.setSelectedOpenDay(openday));
   dispatch(actions.setDisplayUpdate(true));
  };
  const handleDelete = (name) => {
   // dispatch(actions.deleteCenter(name));
  };

  const handleAssign = (openday) => {
    dispatch(actions.setSelectedOpenDay(openday));
   // dispatch(actions.setDisplayUpdateVac(true));
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
              Add new Open Day
            </Button>

            {isAddVisible && <AddOpenDay />}
            {isUpdateVisible && <UpdateOpenDay />}
            
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Centre</TableCell>
                  <TableCell>date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>volunteers</TableCell>
                  <TableCell>users invited</TableCell>
                  <TableCell>users age</TableCell>
                  <TableCell>Vaccine type</TableCell>
                  <TableCell>status</TableCell>
                  <TableCell>vaccinated</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Assign volunteers</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              {openDays.loading && <div>Loading ... </div>}
              <TableBody>
                {!openDays.loading &&
                  openDays.list &&
                  openDays.list.map((openday, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell> {centers.find(center => center._id === openday.center)?.name}</StyledTableCell>
                      <StyledTableCell> {openday?.date ? moment(openday.date).format("DD-MM-YYYY") : "unkown"}</StyledTableCell>
                      <StyledTableCell> {openday?.appointmentTime ?openday?.appointmentTime: '08:00' }</StyledTableCell>
                      <StyledTableCell>
                        {openday?.volunteersList.length}
                      </StyledTableCell>
                      <StyledTableCell>
                      {openday?.users.length}
                      </StyledTableCell>
                      <StyledTableCell>
                      {'[' + openday?.startAge +'ans , ' + openday?.endAge +'ans]'}
                      </StyledTableCell>
                      <StyledTableCell>
                        {openday?.vaccine_type
                          ? vaccines.find(center => center._id === openday.vaccine_type)?.vaccine_type
                          : "Not assigned"}
                      </StyledTableCell>
                      <StyledTableCell>
                      {openday?.status ? 'ended' : 'Availibale'}
                      </StyledTableCell>
                      <StyledTableCell>
                      {0 +'%'}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleUpdate(openday)}>
                          Update{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Button onClick={() => handleAssign(openday)}>
                          Assign{" "}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton onClick={() => handleDelete(openday.name)}>
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

export default ManageOpenDay;
