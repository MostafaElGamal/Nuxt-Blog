import Vuex from 'vuex'
import Cookie from 'js-cookie'
// import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null,
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPosts(state, addedPost) {
                state.loadedPosts.push(addedPost)
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null
            },
            editPosts(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                )
                state.loadedPosts[postIndex] = editedPost
                console.log(state.loadedPosts[postIndex])
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get('/Nuxt-Blog/posts.json')
                    .then(res => {
                        const postsArray = []
                        for (const key in res) {
                            postsArray.push({...res[key], id: key })
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch(error => {})
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, postData) {
                const createdPost = {
                    ...postData,
                    updatedDate: new Date()
                }
                return this.$axios
                    .$post('/Nuxt-Blog/posts.json', createdPost)
                    .then(res => {
                        vuexContext.commit('addPosts', {
                            ...createdPost,
                            id: res.name
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            editPost(vuexContext, editedPost) {
                return this.$axios
                    .$put(
                        '/Nuxt-Blog/posts/' +
                        editedPost.id +
                        '.json?auth=' +
                        vuexContext.state.token,
                        editedPost
                    )
                    .then(res => {
                        vuexContext.commit('editPosts', editedPost)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            authUser(vuexContext, authData) {
                let authUrl =
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
                    process.env.fb_API_KEY
                if (!authData.isLogin) {
                    authUrl =
                        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                        process.env.fb_API_KEY
                }
                return this.$axios
                    .$post(authUrl, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    })
                    .then(res => {
                        vuexContext.commit('setToken', res.idToken)
                        localStorage.setItem('token', res.idToken)
                        localStorage.setItem(
                            'tokenEndsDate',
                            new Date().getTime() + res.expiresIn * 1000
                        )
                        Cookie.set('jwt', token)
                        Cookie.set(
                            'tokenEndsDate',
                            new Date().getTime() + res.expiresIn * 1000
                        )
                        vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration)
            },
            initAuth(vuexContext, req) {
                if (req) {
                    if (!req.header.cookie) {
                        return
                    }
                    const jwtCookie = req.header.cookie
                        .split(';')
                        .find(c => c.trim().startsWith('jwt='))
                    if (!jwtCookie) {
                        return
                    }
                    const token = jwtCookie.split('=')[1]
                }
                const token = localStorage.getItem('token')
                const tokenEndsDate = localStorage.getItem('tokenEndsDate')

                if (new Date().getTime() > +tokenEndsDate || !token) {
                    return
                }
                vuexContext.dispatch(
                    'setLogoutTimer', +tokenEndsDate - new Date().getTime()
                )

                vuexContext.commit('setToken', token)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuth(state) {
                return state.token != null
            }
        }
    })
}

export default createStore