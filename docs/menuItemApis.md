# locations API's

- [] create Menu Item
- [] update Menu Item
- [] get All menu items category wise of particular restaurant.
- [] get single menu item of particular restaurant
- [] delete menu item.

# process

- [] create category
    **Role** : admin/ restaurant owner
    - name is required
    - should be unique in database.

- [] create Menu Item
    **Role** : restaurant owner
    - fields are restaurantId, name , description , categoryId,
    price , image quantityAllowed.
    - required : restaurantId, name, categoryId,
    price , quantityAllowed.
    - name should be unique.
    - if image is given then delete existing and update new one.
    - restaurant should exists.
    -  save the menu item.

- [] update Menu Item
    **Role** : restaurant owner
    - fields are restaurantId, name , description , categoryId,
    price , image quantityAllowed.
    - required : restaurantId, name
    - if image is given then delete existing and update new one.
    - restaurant should exists.
    - menu item should exists.
    - update the menu item.
    
- [] get All menu items category wise of particular restaurant.
    **Role** : public
    - required: restaurantId
    - paginated data with default 10 records.

- [] get single menu item of particular restaurant
    **Role** : public
    - required: menuId
    - should retrieve menu for particular restaurant.

- [] delete menu item.
    **Role** : restaurant owner
    - required: menuId
