import { useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface ISurvey {
  id: string;
  survey: {
    answers: [string];
    question: string;
  };
  validFrom: string;
  validUntil: string;
  userAnswers: [{ selectedAnswer: number; timestamp: string }];
}

export default function Survey() {
  const [answer, setAnswers] = useState('');
  const [surveys, setSurveys] = useState<ISurvey[]>([]);

  const addTodo = async (e: Event) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'surveys'), {
        survey: '',
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const fetchSurveys = async () => {
    await getDocs(collection(db, 'surveys')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map<ISurvey>(
        (doc) =>
          ({
            ...doc.data(),
            id: doc.id,
          } as ISurvey),
      );
      setSurveys(newData);
      console.log(surveys, newData);
    });
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e) => setAnswers(e.target.value)}
            />
          </div>
        </div>

        <div className="todo-content">
          {surveys?.map((survey, i) => (
            <div key={i}>
              <p>Question: {survey.survey.question}</p>
              {survey.survey.answers.map((q, i) => (
                <p key={i}>{q}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
