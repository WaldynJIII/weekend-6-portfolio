const express = require('express');
const pool = require('../modules/pool');

const router = express.Router()
router.get('/', (req, res) => {

    

    const queryText = `SELECT * FROM "projects"  ORDER BY "id" ASC`;
    
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });

});
router.post('/', (req, res) => {

    console.log(req.body)
    let proj = req.body
    const queryText = `INSERT INTO "projects" ( "name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6, $7)`
    pool.query(queryText, [proj.name, proj.description, proj.thumbnail, proj.website, proj.github, proj.date_completed, proj.tag_id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const queryText = `DELETE FROM "projects" WHERE "id" = $1`
    pool.query(queryText, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in DELETE', error);
        res.sendStatus(500);
    })
});

module.exports = router;