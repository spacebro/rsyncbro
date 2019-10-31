# rsyncbro

A simple app to rsync media to a remote folder

## ❓Why ?

It is a simple app written for the [spacebro
galaxy](https://github.com/spacebro/)

Sometimes you want all the media from a collection to be sent to a
remove computer.
rsyncbro sends all files to the same folder in the remote computer.
All you have to do is set the name of the remove computer in settings

## 🌍 Installation

```
git clone https://github.com/spacebro/rsyncbro
nvm use
yarn
```


## ⚙ Configuration

```
cp settings/settings.default.json settings/settings.json
```

And edit settings.json
You can also change settings with argv parameters.
Learn more about this on [standard-settings](https://github.com/soixantecircuits/standard-settings)


## 👋 Usage

```
nvm use
node index.js
```

## Special server settings

Custom port? Custom ssh key? Put that in your `~/.ssh/config`
[file](https://www.digitalocean.com/community/tutorials/how-to-configure-custom-connection-options-for-your-ssh-client).

## 🕳 Troubleshooting

Ask emmanuel on soixantecircuits.slack.com

## ❤️ Contribute

Please do!
