const express = require('express')
// Importing Router
const router = express.Router()

// Every route is prefixed with router instead of app since it is using express router. It is then exported at the
// bottom

// Import the controller functions
const {
   getPeople,
   createPerson,
   createPersonPostman,
   updatePerson,
   deletePerson
} = require('../controllers/people')

// GET method
router.get('/', getPeople)

// POST method using HTML Form. For the Vanilla JS Form. Postman is not working for this one. Need Body-Parser or
// something.
router.post('/', createPerson)

// POST method using JS For Postman Only.
router.post('/postman', createPersonPostman)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

// another way to define routes with similar prefixes
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router