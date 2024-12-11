# DEVTinder APIs

## authRouter
- POST /signup
- POST /login
- POST /logout


## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password // Forgot password API


## connectionRequestRouter
- POST /request/send/:status/:userId



- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## userRouter
- GET /user/connection
- GET /user/requests/received
- GET /user/feed - Gets you the profiles of other users on platform

## Status: ignore, interested, accepted, rejected