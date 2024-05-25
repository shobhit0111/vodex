// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 640,
//     maxHeight: 500,
//     backgroundColor: '#1a1a1a',
//     color: 'white',
//   },
//   header: {
//     backgroundColor: '#2d2d2d',
//   },
//   headerCell: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: '#2d2d2d',
//     },
//   },
//   cell: {
//     color: 'white',
//     height: '5px'
//   },
//   statusNew: {
//     backgroundColor: '#1976d2',
//     color: 'white',
//     padding: '5px 10px',
//     borderRadius: '5px',
//     display: 'inline-block',
//   },
//   statusInProgress: {
//     backgroundColor: '#2979ff',
//     color: 'white',
//     padding: '5px 10px',
//     borderRadius: '5px',
//     display: 'inline-block',
//   },
//   statusNotInterested: {
//     backgroundColor: '#fbc02d',
//     color: 'black',
//     padding: '5px 10px',
//     borderRadius: '5px',
//     display: 'inline-block',
//   },
//   button: {
    
//   },
//   assigneeButton: {
//     backgroundColor: '#444',
//     color: 'white',
//     // padding: '5px 10px',
//     borderRadius: '5px',
//     border: 'none',
//   },
// });

// function createData(name, status, email, createdTime, assignee, avatar) {
//   return { name, status, email, createdTime, assignee, avatar };
// }

// const rows = [
//   createData('Carolyn Perkins', 'New', 'elleen_h@hotmail.com', '12/06/2021 12:53', 'Carrie Harris', 'path/to/avatar1.png'),
//   createData('Terrance Moreno', 'New', 'terrance_moreno@infotech.io', '23/08/2021 06:40', 'Toni Lane', 'path/to/avatar2.png'),
//   createData('Ron Vargas', 'New', 'terrance_moreno@infotech.io', '23/08/2021 06:40', 'Jeanne Mendoza', 'path/to/avatar3.png'),
//   createData('Luke Cook', 'Not Interested', 'terrance_moreno@infotech.io', '28/09/2021 12:53', 'Lorraine Carr', 'path/to/avatar4.png'),
//   createData('Joyce Freeman', 'In Progress', 'joyce991@infotech.io', '24/09/2021 12:53', 'Myrtle Mason', 'path/to/avatar5.png'),
//   createData('Samantha Phillips', 'New', 'joyce991@infotech.io', '02/10/2021 12:53', 'Perry Ward', 'path/to/avatar6.png'),
// ];

// export default function LeadsTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead className={classes.header}>
//           <TableRow>
//             <TableCell className={classes.headerCell}>Name</TableCell>
//             <TableCell className={classes.headerCell}>Status</TableCell>
//             <TableCell className={classes.headerCell}>Email</TableCell>
//             <TableCell className={classes.headerCell}>Created Time</TableCell>
//             <TableCell className={classes.headerCell}>Assignee</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name} className={classes.row}>
//               <TableCell className={classes.cell}>
//                 <Avatar alt={row.name} src={row.avatar} style={{ marginRight: '10px' }} />
//                 {row.name}
//               </TableCell>
//               <TableCell className={classes.cell}>
//                 <span className={classes[`status${row.status.replace(' ', '')}`]}>
//                   {row.status}
//                 </span>
//               </TableCell>
//               <TableCell className={classes.cell}>{row.email}</TableCell>
//               <TableCell className={classes.cell}>{row.createdTime}</TableCell>
//               <TableCell className={classes.cell}>
//                 <button className={classes.assigneeButton}>{row.assignee}</button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button variant="contained" color="primary" className={classes.button}>
//         View All Leads
//       </Button>
//     </TableContainer>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import "./table.css"

const useStyles = makeStyles({
    container:{
        position:"relative",
    },
  table: {
    width: 1208,
  },
  row: {
    height: 30.83,
  },
  cell: {
    padding: '0 16px',
    color: "#868686"
  },
  headerCell: {
    fontWeight: 'bold',
  },
  statusNew: {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
  },
  statusInProgress: {
    backgroundColor: '#2979ff',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
  },
  statusNotInterested: {
    backgroundColor: '#fbc02d',
    color: 'black',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
  },
  button: {
    margin: '20px 0',
    position:"absolute",
    top:"0"
  },
  assigneeButton: {
    background:"transparent",
    color: '#868686',
    borderRadius: '5px',
    border: '1px solid #636363',
    height:"2rem",
    width: '12rem'
  },
});

function createData(name, status, email, createdTime, assignee, avatar) {
  return { name, status, email, createdTime, assignee, avatar };
}

const rows = [
  createData('Carolyn Perkins', 'New', 'elleen_h@hotmail.com', '12/06/2021 12:53', 'Carrie Harris', 'path/to/avatar1.png'),
  createData('Terrance Moreno', 'New', 'terrance_moreno@infotech.io', '23/08/2021 06:40', 'Toni Lane', 'path/to/avatar2.png'),
  createData('Ron Vargas', 'New', 'terrance_moreno@infotech.io', '23/08/2021 06:40', 'Jeanne Mendoza', 'path/to/avatar3.png'),
  createData('Luke Cook', 'Not Interested', 'terrance_moreno@infotech.io', '28/09/2021 12:53', 'Lorraine Carr', 'path/to/avatar4.png'),
  createData('Joyce Freeman', 'In Progress', 'joyce991@infotech.io', '24/09/2021 12:53', 'Myrtle Mason', 'path/to/avatar5.png'),
  createData('Samantha Phillips', 'New', 'joyce991@infotech.io', '02/10/2021 12:53', 'Perry Ward', 'path/to/avatar6.png'),
];

export default function LeadsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell className={`${classes.cell} ${classes.headerCell}`}>Name</TableCell>
            <TableCell className={`${classes.cell} ${classes.headerCell}`}>Status</TableCell>
            <TableCell className={`${classes.cell} ${classes.headerCell}`}>Email</TableCell>
            <TableCell className={`${classes.cell} ${classes.headerCell}`}>Created Time</TableCell>
            <TableCell className={`${classes.cell} ${classes.headerCell}`}>Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.row}>
              <TableCell className={`name-cell ${classes.cell} `}>
                <div className="avatar-div"><Avatar alt={row.name} src={row.avatar} style={{  width: 20, height: 20 }} /></div>
                
                {row.name}
              </TableCell>
              <TableCell className={classes.cell}>
                <span className={classes[`status${row.status.replace(' ', '')}`]} style={{lineHeight:"10px"}}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell className={classes.cell}>{row.email}</TableCell>
              <TableCell className={classes.cell}>{row.createdTime}</TableCell>
              <TableCell className={classes.cell}>
                <button className={classes.assigneeButton}>{row.assignee}</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}
