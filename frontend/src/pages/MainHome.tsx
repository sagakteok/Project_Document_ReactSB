// mainhome.tsx
import React from 'react';
import Header from '../components/HeaderDesktop.tsx';

function MainHome() {
    return (
        <React.StrictMode>
            <div>
                <Header /> {/* Header 컴포넌트를 불러와 렌더링 */}
                <main style={styles.main}>
                    <h2>Welcome to MainHome!</h2>
                    <p>This is the main content area.</p>
                </main>
            </div>
        </React.StrictMode>
    );
}

const styles = {
    main: {
        padding: '2rem',
        textAlign: 'center',
    },
};

export default MainHome;