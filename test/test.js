const firebase = require('@firebase/testing');

const MY_PROJECT_ID = 'test-2021-0308';

describe('Out social app', () => {
  it('同じプロジェクトに所属しているユーザーの取得', async () => {
    const user1 = { uid: '1', projectIds: ['1', '2'] };
    const user2 = { uid: '2', projectIds: ['2'] };
    const user3 = { uid: '3', projectIds: ['3'] };

    const adminDb = firebase
      .initializeAdminApp({ projectId: MY_PROJECT_ID })
      .firestore();

    await adminDb.collection('users').doc('1').set(user1);
    await adminDb.collection('users').doc('2').set(user2);
    await adminDb.collection('users').doc('3').set(user3);

    const db = firebase
      .initializeTestApp({ projectId: MY_PROJECT_ID, auth: { uid: '1' } })
      .firestore();

    const usersRef = db.collection('users');
    const coworkers = await firebase.assertSucceeds(
      usersRef
        .where('projectIds', 'array-contains-any', user1.projectIds)
        .get()
        .then(({ docs }) => docs.map((_) => ({ ..._.data() })))
    );
    console.log(coworkers);
  });
});
