'use strict';

 module.exports = function(_, passport){
    return {
        SetRouting: function(router){
            router.get("/",this.indexPage);
            router.get("/signup", this.getSignUp);
            router.get('/home', this.homePage); 
            router.get('/auth/facebook', this.getFacebookLogin);
            router.get('/auth/facebook/callback', this.facebookLogin);
            router.get('/auth/google', this.getGoogleLogin);
            router.get('/auth/google/callback', this.GoogleLogin);

            router.post('/', this.postLogin);
            router.post('/signup', this.postSignUp);
        },

        indexPage: function(req,res){
            return res.render('index');
        },

        postLogin: passport.authenticate('local.login', {
            successRedirect: '/home',
            failureRedirect: '/',
            failureFlash: true
        }),
        
        getSignUp: function(req, res){
            return res.render('signup');
        },
        
        postSignUp: passport.authenticate('local.signup', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true
        }),

        getFacebookLogin: passport.authenticate('facebook',{
            scope: 'email',
        }),

        getGoogleLogin: passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']
        }),

        GoogleLogin: passport.authenticate('google', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true
        }),


        facebookLogin: passport.authenticate('facebook', {
            successRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true,
        }),

        homePage: function(req, res){
            return res.render('home');
        }
    }
 }