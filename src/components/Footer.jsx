export default function Footer() {
    return (
        <footer className="bg-green-700 text-center text-white p-4 mt-4">
            <p className="text-sm">Developed by Elielson Nascimento with React and Tailwindcss</p>
        <p>&copy; {new Date().getFullYear()}Elielson Nascimento. All rights reserved.</p>
        </footer>
    );
}