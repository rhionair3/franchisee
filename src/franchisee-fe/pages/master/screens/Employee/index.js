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
import stylesBrambang from '../../../../../../public/assets/styles/styles';

class Employee extends Component {
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
            ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
            ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
            ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
            ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
            ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
            ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
            ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
            ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
            ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
            ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
            ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
            ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
            ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
            ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
            ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
            ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
            ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000" ],
            ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
            ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
            ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
            ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
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
                            <MUIDatatable title={"ACME Employee list"} data={data} columns={columns} options={options} />
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
                            Informasi Data Pengguna
                        </Typography>
                    </Paper>
                </div>
                <div className={classes.mainComponentWrapper}>
                    <Paper>
                        <MUIDatatable title={"ACME Employee list"} data={data} columns={columns} options={options} />   
                    </Paper>
                </div>
            </div>
          );
    }
}

Employee.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(stylesBrambang, { withTheme: true })(Employee);