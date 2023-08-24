const oracledb = require('oracledb');








async function run() {
    const connection = await oracledb.getConnection({
        user          : "PROJECT",
        password      : 'project',  // contains the hr schema password
        connectString : "localhost/orclpdb"
    });

  const result = await connection.execute(`SELECT "password"
    FROM STUDENTS
    WHERE "id" =10
   `);
   console.log("Result is:", result.rows);
   await connection.commit();

   await connection.close();


}



run();



 


