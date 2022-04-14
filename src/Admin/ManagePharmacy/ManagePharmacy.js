import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Layout, Button } from "antd";
import DeleteIcon from "@material-ui/icons/Delete"; 
import {IconButton,Table,TableBody,TableCell,TableHead,TableRow,withStyles} from "@material-ui/core";    


import * as actions from '../../redux/actions/pharmacies'  
import UpdatePharmacy from "./UpdatePharmacy/UpdatePharmacy";
import AddPharmacy from "./AddPharmacy/AddPharmacy";
import SideBar from "../../SideBar/SideBar";

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

function ManagePharmacy() {
  const isAddVisible = useSelector((state) => state.pharmacies.displayed) 
  const isUpdateVisible = useSelector((state) => state.pharmacies.displayUpdate) 
  const pharmacies = useSelector((state) => state.pharmacies)    
  const dispatch = useDispatch() 
  
  useEffect(() => {
    try {
      dispatch(actions.fetchPharmacies()) 
    } catch (e) {
      console.log('errroooor')
    }  
    
  }, [])
  const handleUpdate = (pharmacy) =>{
    dispatch(actions.setSelectedPharmacy(pharmacy)) 
    dispatch(actions.setDisplayUpdate(true)) 
  }
  const handleDelete =  (name) => {
    dispatch(actions.deletePharmacy(name))

  }
  return ( 
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
             <Button type="primary" onClick={()=>dispatch(actions.setDisplayed(true)) }>
              Add new pharmacy
            </Button>
             { isAddVisible && <AddPharmacy /> }
             { isUpdateVisible && <UpdatePharmacy /> }
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow> 
                    <TableCell>Name</TableCell>
                    <TableCell>Governorate</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Capacity</TableCell>
                    <TableCell>Vac-Type</TableCell>
                    <TableCell>Vac-Stock</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                {pharmacies.loading && <div>Loading ... </div>}
                <TableBody>
                {!pharmacies.loading && pharmacies.list && pharmacies.list.map((pharmacy, index) =>   
                  <StyledTableRow key={index}> 
                    <StyledTableCell> {pharmacy.name}</StyledTableCell>
                    <StyledTableCell> {pharmacy.governorate}</StyledTableCell>
                    <StyledTableCell> {pharmacy.city}</StyledTableCell>
                    <StyledTableCell> {pharmacy.pharmacy_capacity}</StyledTableCell>
                    <StyledTableCell> {pharmacy.type_vaccine ? pharmacy.type_vaccine : "Not yet"}</StyledTableCell>
                    <StyledTableCell> {pharmacy.number_vaccine}</StyledTableCell>
                    <StyledTableCell>
                      <Button onClick={()=>handleUpdate(pharmacy)}>Update </Button>
                    </StyledTableCell>
                    <StyledTableCell> 
                      <IconButton onClick={()=> handleDelete(pharmacy.name)}>
                        <DeleteIcon className="btnColorDelete" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>)
                  }
                </TableBody>
              </Table>
            </div>
          </Content>
        </Layout>{" "}
      </Layout> 
  );
}

export default ManagePharmacy;
