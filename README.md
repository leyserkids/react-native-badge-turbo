# react-native-badge-turbo

Get/Set badge for Android.

## Installation

```sh
npm install react-native-badge-turbo
```

## Usage


```js
import { 
  getBadgeCount,
  setBadgeCount,
  isBadgeSupported,
} from 'react-native-badge-turbo';

// ...

if (isBadgeSupported()) {
    const cnt = await getBadgeCount();
    await setBadgeCount(cnt + 1);
}
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
