import { useNavigate } from 'react-router-dom';
import './LoginModal.css';

interface LoginModalProps {
  onClose: () => void;
}

/**
 * Selector de rol simulado. No hay autenticación real (no hay backend):
 * simplemente guarda el rol elegido en localStorage y navega al Dashboard.
 * Cuando exista un backend, este componente es el punto donde se conectaría
 * un login real (formulario de usuario/contraseña, tokens, etc).
 */
export function LoginModal({ onClose }: LoginModalProps) {
  const navigate = useNavigate();

  const chooseRole = (role: 'estudiante' | 'otro') => {
    localStorage.setItem('rumabi-role', role);
    onClose();
    navigate('/dashboard');
  };

  return (
    <div className="login-backdrop" onClick={onClose}>
      <div className="login-modal glass" onClick={(e) => e.stopPropagation()}>
        <h3>Iniciar sesión como</h3>
        <p className="login-subtitle">Elige un rol para continuar. Es una vista de demostración: no se requiere contraseña.</p>

        <button className="login-option" onClick={() => chooseRole('estudiante')}>
          <span className="login-icon">🎓</span>
          <span>
            <strong>Estudiante</strong>
            <small>Accede a tu horario, tareas y grupos</small>
          </span>
        </button>

        <button className="login-option" onClick={() => chooseRole('otro')}>
          <span className="login-icon">🧑‍💼</span>
          <span>
            <strong>Otro usuario</strong>
            <small>Docente, administrativo u otro rol del campus</small>
          </span>
        </button>

        <button className="login-cancel" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}
