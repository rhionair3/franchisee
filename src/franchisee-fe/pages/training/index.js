import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDatatable from 'mui-datatables';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Edit, DeleteForever } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import stylesBrambang from '../../../../public/assets/styles/styles';

class Training extends Component {
    render() {
        const { classes } = this.props;
        const columns = [
            {
              name: "Name",
              options: {
                filter: true,
              }
            },      
            {
              name: "Title",
              options: {
                filter: true,
              }
            },
            {
              name: "Location",
              options: {
                filter: false,
              }
            },
            {
              name: "Age",
              options: {
                filter: true,
              }
            },
            {
              name: "Salary",
              options: {
                filter: true,
                sort: false
              }
            }      
          ];
      
      
          const data = [
            ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
            ["Aiden Lloyd", "Business Consultant", "Dallas",  55, "$200,000"],
            ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
            ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
            ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
            ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
            ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
            ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
            ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
            ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"]
          ];
      
          const options = {
            filter: true,
            filterType: 'dropdown',
            responsive: 'scroll',
            expandableRows: true,
            renderExpandableRow: (rowData, rowMeta) => {
                const colSpan = rowData.length + 1
              return (
                <TableRow className={classes.tableDetailWrapper}>
                    <TableCell colSpan={colSpan}>
                            <MUIDatatable title={"ACME Training list"} data={data} columns={columns} options={options} />
                    </TableCell>
                </TableRow>
              );
            }
          };
      
          return (
            <div>
                <div className={classes.headerComponentWrapper}>
                    <Paper className={classes.headerComponentInner}r>
                        <Typography variant="h6" gutterBottom>
                            Informasi Data Training
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper>
                        <MUIDatatable title={"ACME Training list"} data={data} columns={columns} options={options} />   
                    </Paper>
                </div>
            </div>
          );
    }
}

Training.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(Training);