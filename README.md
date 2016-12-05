# Work flow

1. Create project

   - Start new project on github

     - initialize with readme
     - clone to computer

   - Initialize project

     - ```yarn init```
     - ```yarn add express```
     - ```touch server.js```
     - add simple server code
     - ```yarn add global knex```
     - ```yarn add pg knex```
     - ```createdb newapp_dev```
     - ```createdb newapp_test```
     - ```knex init```

   - Make migration/migrations directory

     - ```knex migrate:make users```
     - fill out migration file
     - ```knex migrate:latest```

   - Add routes directory

     - ```mkdir routes```

     - ```cd routes```

     - ```touch users.js```

       ​

     ​
