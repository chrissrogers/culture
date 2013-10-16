culture
==========
> Put your application in a petri dish and watch it grow

### Philosophy

A service should be able to appear and disappear from within a platform at will
and not lose a critical message. Each service will have knowledge of alive services by way
of a shared redis node.

### Feature Goals

* ZeroMQ-based message brokering: pub-sub, req-rep
* optional message persistence
* service location: lookup, announce
* cache layer
* persistence layer
* RESTful router
