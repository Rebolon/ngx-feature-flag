# @rebolon/ngx-feature-flag

This library allow to use feature flag in application. You can enable or disable feature using a serice, a directive, or a guard.

## installation

`npm install @rebolon/ngx-feature-flag`

## usage

1. you can setup your features in your environments files. It will allow to enable or not depending on where you deploy your application.
Just add a `features` property to your environment and add a list of key/value like this :
```
{
  features: {
    "feature-A": true,
    "feature-B": false,
  }
}
```

2. in your module inject environment like this :
```
import { environment } from 'PATH_TO/environment.ts'

...
providers: [
  {
    provide: NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN,
    useValue: environment
  },
  NgDummyService, // if not using standalone component
]
```

2bis. or in your bootstrap file if you are in Standalone application, like this :
```
providers: [
  provideNgxFeatureFlags(environment),
],
```

2thd. or in your components files if you are in Standalone application, like this :
```
providers: [
  {
    provide: NGX_FEATURE_FLAG_ENVIRONMENT_TOKEN,
    useValue: environment
  },
  NgDummyService,
],
```
