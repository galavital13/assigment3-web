# React app with Vite

Building a CRUD

    Create - post
    Read - get
    Update - put
    Delete - delete

Using react context for state management

I had to install CORS on the BE,

so don't forget to npm i in the 'server' dir

#
small thing I noticed for the BE:

Consider changing the logic to use `_id` instead of `item_name`

`_id` is uniq from Mongo and item_name is a text


https://verdant-seal-560.notion.site/Assignment-3-2d580ae76c10485daa4dfa41be9ab3c3?pvs=4

without UI frame work

how to run it local?

```
git clone git@github.com:syahbes/ex3.git
cd server
npm install

cd ..

cd viteClient
npm install
```

#### server: 
```
node index.js
```

#### client: 
```
npm run dev
```
