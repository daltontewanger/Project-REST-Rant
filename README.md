# **Project REST-Rant**

REST-Rant is an app where users can review restaurants.

## Routes

| Method |           Path           | Purpose                                          |
| :----: | :----------------------: | :----------------------------------------------- |
|  GET   |            /             | Home page                                        |
|  GET   |         /places          | Places index page                                |
|  POST  |         /places          | Create new place                                 |
|  GET   |       /places/new        | Form page for creating a new place               |
|  GET   |       /places/:id        | Details about a particular place                 |
|  PUT   |       /places/:id        | Update a particular place                        |
|  GET   |     /places/:id/edit     | Form page for editing an existing place          |
| DELETE |       /places/:id        | Delete a particular place                        |
|  POST  |     /places/:id/rant     | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
|  GET   |            \*            | 404 page (matches any route not defined above)   |

## Database

### Places

|   Field   | Data Type |
| :-------: | :-------- |
|   name    | String    |
|   city    | String    |
|   state   | String    |
| cuisines  | String    |
| and a pic | String    |

### Rant & Rave

|  Field  | Data Type | Note                                                                              |
| :-----: | :-------: | :-------------------------------------------------------------------------------- |
| author  |  String   | Name of comment's writer; defaults to Anonymous if missing.                       |
|  rant   |  Boolean  | Each comment is either a rant (negative) or a rave (positive). Defaults to false. |
|  stars  |  mumber   | 1 to 5 star rating in increments of 0.5; required, no default                     |
| content |  String   | The written content of the comment; defaults to an empty string.                  |
