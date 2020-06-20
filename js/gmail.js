// Step 1で取得したOAuthクライアントIDをここに書く。
const CLIENT_ID = '795515016825-hpsmffans77e8pf17smoj3gn2t592rhk.apps.googleusercontent.com';

async function onLoad() {
  try {
    // Google APIs Client Libraryの初期化。
    await gapi.load('client:auth2');
    await gapi.client.init({
      clientId: CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/gmail.send'
    });
    await gapi.client.load('gmail', 'v1');
    console.log('Initialized');
  } catch (e) {
    console.error(e);
  }
}

async function signIn() {
  try {
    await gapi.auth2.getAuthInstance().signIn();
    console.log('Signed in');
  } catch (e) {
    console.error(e);
  }
}

async function signOut() {
  try {
    await gapi.auth2.getAuthInstance().signOut();
    console.log('Signed out');
  } catch (e) {
    console.error(e);
  }
}

async function sendEmail() {
  try {
    // 送りたいメールアドレスに書き換えてください。
    const to = 'gettodowithallhaste9@gmail.com';
    const subject = 'テスト';
    const name = $('input[name="name"]').val();
    const email = $('input[name="email"]').val();
    const message = $('input[name="message"]').val();
    const body = '#name: ' + name + ' #email: ' + email + ' #message: ' + message;
    // サインイン済みかチェック。
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
      console.error('Sign in first');
      return;
    }

    // メールデータの作成。
    const mimeData = [
      `To: ${to}`,
      'Subject: =?utf-8?B?' + btoa(unescape(encodeURIComponent(subject))) + '?=',
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: 7bit',
      '',
      body,
    ].join('\n').trim();
    const raw = btoa(unescape(encodeURIComponent(mimeData))).replace(/\+/g, '-').replace(/\//g, '_');
    // メールの送信。
    await gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {raw: raw},
    });
    console.log('Sent email');
  } catch (e) {
    console.error(e);
  }
}