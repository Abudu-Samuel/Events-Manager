// import React from 'react';
// import AdminForm from '../components/AdminForm';
// import { connect } from 'react-redux';
// import * as userActions from '../actions/actionCreator';


// class AdminModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       capacity: '',
//       location: '',
//       price: '',
//       state: '',
//       description: '',
//       image: '',
//       centerId: '',
//       isAvailable: '',
//       errorStatus: false,
//       redirect: false,
//       redirectMessage: '',
//       showRedirectMessage: false
//     };
//   }

//   // componentDidMount() {
//   //   console.log(this.props, 'editvcenter');
//   //   this.props.singleCenter(this.props.match);
//   // }

// getCenterId = (event) => {
//   console.log(event.target.value)
//  this.setState({
//    centerId: event.target.id
//  })
// }

//   componentWillReceiveProps(nextProps) {
//     console.log(nextProps.getSingleCenter, '@@@@@@');
//     if (nextProps.getSingleCenter) {
//       this.setState({
//         name: nextProps.getSingleCenter.center.name,
//         // centerId: nextProps.getSingleCenter.event.centerId,
//         capacity: nextProps.getSingleCenter.center.capacity,
//         location: nextProps.getSingleCenter.center.location,
//         price: nextProps.getSingleCenter.center.price,
//         state: nextProps.getSingleCenter.center.state,
//         description: nextProps.getSingleCenter.center.description,
//         image: nextProps.getSingleCenter.center.image,
//         isAvailable: nextProps.getSingleCenter.center.isAvailable,

//       });
//     }
//   }

//   render() {
//     return (
//       <td><a className="teal-text px-1" role="btn" data-toggle="modal" data-target={`#modalContactForm${this.props.centerKey}`} data-placement="top" title="Edit"><i className="fa fa-pencil" id={this.props.centerKey} onClick={() => this.getCenterId(centerId)} /></a>

//         <div className="modal fade" id={`modalContactForm${this.props.centerKey}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//           <div className="modal-dialog cascading-modal" role="document">

//             <div className="modal-content">
//               <div className="modal-header btn-mycolor darken-3 white-text">
//                 <h4 className="title"><i className="fa fa-pencil" /> Edit Center</h4>
//                 <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>

//               <div className="modal-body">
//                 <AdminForm
//                   name={this.state.name}
//                   capacity={this.state.capacity}
//                   location={this.state.location}
//                   price={this.state.price}
//                   state={this.state.state}
//                   description={this.state.description}
//                   image={this.state.image}
//                   isAvailable={this.state.isAvailable}
//                   // center={center}
//                   // name={name}
//                   // capacity={capacity}
//                   // location={location}
//                   // price={price}
//                   // state={state}
//                   // description={description}
//                   // image={image}
//                   // isAvailable={isAvailable}
//                   // errorStatus={errorStatus}
//                   // redirect={redirect}
//                   // redirectMessage={redirectMessage}
//                   // showRedirectMessage={showRedirectMessage}
//                   // handleChange={handleChange}
//                   // handleSubmit={handleSubmit}
//                 />
//               </div>
//             </div>

//           </div>
//         </div>

//         <a className="red-text px-1" role="btn" data-toggle="modal" data-target="#modalConfirmDelete" data-placement="top" title="Delete"><i className="fa fa-trash" /></a>
//         <div className="modal fade" id="modalConfirmDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-md modal-notify modal-danger" role="document">
//             <div className="modal-content text-center">
//               <div className="modal-header d-flex justify-content-center">
//                 <p className="heading">Are you sure?</p>
//               </div>
//               <div className="modal-body">
//                 <i className="fa fa-times fa-4x animated rotateIn" />
//               </div>
//               <div className="modal-footer flex-center">
//                 <a href="editcenter.html" className="btn  btn-outline-secondary-modal">Yes</a>
//                 <a type="button" className="btn  btn-primary-modal waves-effect" data-dismiss="modal">No</a>
//               </div>
//             </div>

//           </div>
//         </div>

//       </td>

//     );
//   }
// }


// function mapStateToProps(state, ownProps) {
//   return {
//     getSingleCenter: state.centers.foundCenters
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     singleCenter: centerData => dispatch(userActions.singleCenter(centerData)),
//     editcenter: centerData => dispatch(userActions.editCenter(centerData))

//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdminModal);
