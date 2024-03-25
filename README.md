# @rebolon/NgxFeatureFlag

This project expose a library allow to use feature flag in application. And a demo application that uses the distributed library.
The library allows you to enable or disable feature by using a service, a directive or a route guard (using canMatch).

## installation

For the library, see `projects/ngx-feature-flag/README.md`

For the demo application :
1. `npm install` // install angular and all projects dependancies
2. `ng build --project=ngx-feature-flag` // build library to dist folder
2. `ng serve --project=demo` // run the application
3. open a browser on https://localhost:4200

You can change the enabled feature from environment files

## take care

If you have a problem of dependancy injection, install local library with this : `npm install ./dist/ngx-feature-flag --install-links`
It will copy files to node_modules instead of doing a symlink that leads Angular to fail dependancy injection (don't know why)
