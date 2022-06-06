Problem-company want to see each person profile
Ideas-lot of people filling application for their job
Who use it- company

User stories

- As an employee I can fill the application for job in company.
- As a company we can see the profile of each employees.
- As a company we can update the hiring page on browser.
- As a company we can delete unneeded profile.

Employee Models
Name - string
Qualification- string
Dob- Date
Location - string
Gender - string
Nationality- string
Collage - string
Phone - number
Email - string

Application Routes
GET /Home/ viewing the home page
GET /form/ filling a form for job
GET /employees/ see the employees profile
GET /employees/:id/ can see the single employee profile
DELETE /employees/:id/ allow to delete unneeded profile
PUT / employees/:id/allow to edit single profile
POST /employees/create the new profile
