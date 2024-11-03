import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const students = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 92 },
        { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 85, chemistryMarks: 80 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 89, chemistryMarks: 94 },
        { id: 4, name: "David", mathMarks: 67, physicsMarks: 72, chemistryMarks: 70 },
        { id: 5, name: "Eva", mathMarks: 74, physicsMarks: 81, chemistryMarks: 76 },
        { id: 6, name: "Frank", mathMarks: 88, physicsMarks: 92, chemistryMarks: 85 },
        { id: 7, name: "Grace", mathMarks: 91, physicsMarks: 86, chemistryMarks: 90 },
        { id: 8, name: "Henry", mathMarks: 69, physicsMarks: 75, chemistryMarks: 73 },
        { id: 9, name: "Iris", mathMarks: 95, physicsMarks: 94, chemistryMarks: 97 },
        { id: 10, name: "Jack", mathMarks: 80, physicsMarks: 83, chemistryMarks: 78 }
      ];
      
    return (
        <div>
            <LChart width={800} height={300} data={students}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke="red"></Line>
                <Line dataKey="chemistryMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;