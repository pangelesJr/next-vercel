type Props = {
  children?: React.ReactNode
};


export const DarkLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark-Layouts</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
