// import db from '../models';

// const events = db.event;

// /**
//  * @class Event
//  */
// class Event {
//   /**
//    * @param {object} req
//    * @param {object} res
//    * @returns {object} add
//    * @memberOf Event
//    */
//   static add(req, res) {
//     const
//       {
//         title, date, time, type, image, description
//       } = req.body;
//     return events
//       .create({
//         // userId: req.body.userId,
//         title,
//         date,
//         time,
//         type,
//         image,
//         description
//       })
//       .then(created => res.status(201).json({
//         message: 'Event Created!',
//         createdEvent: {
//           title: created.title,
//           date: created.date,
//           time: created.time,
//           type: created.type,
//           image: created.image,
//           description: created.description
//         }
//       }))
//       .catch(error => res.status(400).json({
//         message: error.errors[0].message
//       }));
//   }

//   /**
//    * @static
//    * @param {object} req
//    * @param {object} res
//    * @returns {object} modify
//    * @memberOf Event
//    */
//   static modify(req, res) {
//     const object = {
//       title: req.body.title, date: req.body.date, time: req.body.time, type: req.body.type, image: req.body.image, description: req.body.description
//     };
//     console.log(req.body);
//     console.log(req.body);
//     const updateFields = {};
//     return events
//       .findById(req.params.eventId)
//       .then((eventFound) => {
//         if (eventFound) {
//           if (eventFound.title) {
//             updateFields.title = title;
//           }
//           if (date) {
//             updateFields.date = date;
//           }
//           if (time) {
//             updateFields.time = time;
//           }
//           if (type) {
//             updateFields.type = type;
//           }
//           if (image) {
//             updateFields.image = image;
//           }
//           if (description) {
//             updateFields.description = description;
//           }
//           if (userId) {
//             updateFields.userId = userId;
//           }

//           console.log(req.body);
//           console.log(updateFields);
//           if (updateFields.length < 0) {
//             return res.status(200).json({
//               message: 'Noting to update'
//             });
//           }
//           console.log(updateFields);


//           return events
//             .update(object, {
//               where: {
//                 id: req.params.eventId
//               }
//             })
//             .then(updatedEvent => res.status(201).json({
//               message: 'Event Updated!',
//               data: updatedEvent[1].dataValues
//             }))
//             .catch(error => res.status(400).json({
//               message: error.errors[0].message
//             }));
//         }
//         return res.status(404).json({
//           message: 'Event Not Found!'
//         });
//       })
//       .catch(error => res.status(500).json(error));
//   }
// }

// export default Event;
