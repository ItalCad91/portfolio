import { Router } from "express";

import {  DisplayContactsList, DisplayContactsAddPage, ProcessContactsAddPage, DisplayContactsEditPage, ProcessContactsEditPage, ProcessContactsDelete, displayGraziePage } from "../Controllers/contacts.controller.server.js";

const router = Router();

router.get('/contactList-list', DisplayContactsList);
router.get('/contactList-add', DisplayContactsAddPage);
router.post('/contactList-add', ProcessContactsAddPage);
router.get('/contactList-edit/:id', DisplayContactsEditPage);
router.post('/contactList-edit/:id', ProcessContactsEditPage);
router.get('/contactList-delete/:id', ProcessContactsDelete);
router.get('/Grazie', displayGraziePage);

export default router;