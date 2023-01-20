# restaurant API's

- [] **restaurant Owner**
- [] create restaurant
- [] update restaurant
- [] delete restaurant
- [] get all restaurants, search filters  
- [] get single restaurant by id.

- [] **Admin**
- [] activate restaurant.
- [] get all restaurant with all information.
- [] get single restaurant with all information.

# process
- [] check restaurant name
  - check in the database is restaurant name exits.

- [] create restaurant
    **Role** : restaurant Owner
    - fields are - name, openTime , closeTime, openDays, address, ownerId, image
    - validation: all fields are required.
    - check the existence of restaurant , should be unique.
    - upload the file to fs server, and get the url
    - save the data into database.
    - send response with email to restaurant owner, and admin.
    - status should be pending, and isActive should be false.

- [] update restaurant
    **Role** : restaurant Owner
    - email or id is required.
    - fields are optional- name, openTime , closeTime, openDays, address, ownerId, image
    - check the existence of restaurant , should be unique.
    - if image provided, delete existing image from the fs server and upload new image to the fs server
    - update the url in database
    - save the data into database.
    - send success.

- [] delete restaurant
    **Role** : restaurant Owner
    fields are id.
    - check existence.
    - delete restaurant.

- [] closed restaurant today.
    **Role** : restaurant Owner
    - id
    - should exists 
    - update status to closed.       

- [] get all restaurants, search filters
    **Role** : all/public
    - by default only shows restaurants which are active
    - by default time should check , is current time of user is between restaurant open and close time.
    - filter
      - location
      - name
      - rating
    - validation - filter are optional
    - pagination - 10 should be displayed
    response {
        totalPages,
        perPage,
        data
    }  

- [] get single restaurant by id.
    - id is required.
    - should exists

- [] activate restaurant.
    - restaurant id.
    - should exists
    - should change the status to true of IsActive field

- [] get all restaurant with all information.
    **Role** : admin
    - by default only shows restaurants which are active
    - by default time should check , is current time of user is between restaurant open and close time.
    - filter
      - location
      - name
      - rating
    - validation - filter are optional
    - pagination - 10 should be displayed
    - show all details
    - should show active as well as non active restaurants.
    response {
        totalPages,
        perPage,
        data
    }  

- [] get single restaurant with all information.
    - id is required.
    - should exists
    - non active should be displayed.

- [] get orders

