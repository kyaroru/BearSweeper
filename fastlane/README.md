fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios remove_tmp_keychain

```sh
[bundle exec] fastlane ios remove_tmp_keychain
```

If using self hosted runner, fastlane keychain should be removed

### ios print_changelog

```sh
[bundle exec] fastlane ios print_changelog
```



### ios match_staging

```sh
[bundle exec] fastlane ios match_staging
```



### ios match_production

```sh
[bundle exec] fastlane ios match_production
```



### ios register_new_devices

```sh
[bundle exec] fastlane ios register_new_devices
```

Registers new devices to the Apple Dev Portal and update provisioning profiles

### ios verify_ipa

```sh
[bundle exec] fastlane ios verify_ipa
```



### ios beta

```sh
[bundle exec] fastlane ios beta
```



### ios deploy

```sh
[bundle exec] fastlane ios deploy
```



----


## Android

### android validate_service_account

```sh
[bundle exec] fastlane android validate_service_account
```



### android print_changelog

```sh
[bundle exec] fastlane android print_changelog
```



### android beta

```sh
[bundle exec] fastlane android beta
```

Deploy BearSweeper Android to Firebase App Distribution

### android deploy

```sh
[bundle exec] fastlane android deploy
```



### android validate_bundle

```sh
[bundle exec] fastlane android validate_bundle
```



### android bundle

```sh
[bundle exec] fastlane android bundle
```



### android build

```sh
[bundle exec] fastlane android build
```



----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
