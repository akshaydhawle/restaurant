# payments API's

- [] checkout
- [] get payment history

# process

- [] place order
    **Role** : user
    - input {
        userId,
        method,
        transactionAmount
        cartItems:[id,id],
    }
    - required: userId, method, metadata, transactionAmount, 
    - at least one cartItem should exists.
    - user should exists , cart or menu should exists.
    - checkout / transaction
    - create order. - convert cart item to order item.
    - status should be placed.
    - send email to particular user and to restaurant as well.

- [] get payment history
    - userId
    - user should exists.
    - filter:
        - startDate and endDate
        - status

- [] order history
    - userId    
    - user should exists.
    - filter:
        - startDate and endDate
        - status

- [] **OWNER**- Accepted - restaurant will accept order.
   - validation : orderId
   - changed the status to accepted ,send email to user as well.

- [] **OWNER** - Ready - restaurant will accept order.
   - validation : orderId
   - changed the status to Ready , send mail to delivery guy, and also to user.

- [] **driver** - PICKED - 
   - validation : orderId
   - changed the status to PICKED , send mail to user.

- [] **delivered** - DELIVERED - 
    - orderID
    - changed the status to DELIVERED, send mail to user and restaurant owner.
       