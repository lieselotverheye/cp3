<?php
require_once __DIR__ . '/DAO.php';
class UserDAO extends DAO {

	public function selectAll() {
		$sql = "SELECT * FROM `board_users`";
		$stmt = $this->pdo->prepare($sql);
		$stmt->execute();
		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}

	public function selectById($id) {
		$sql = "SELECT * FROM `board_users` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function selectByEmail($email) {
		$sql = "SELECT * FROM `board_users` WHERE `email` = :email";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':email', $email);
		$stmt->execute();
		return $stmt->fetch(PDO::FETCH_ASSOC);
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `board_users` (`email`, `pass`) VALUES (:email, :password)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':email', $data['email']);
			$stmt->bindValue(':password', $data['password']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(!isset($data['email'])) {
			$errors['email'] = "Please fill in a email";
		}
		if(!isset($data['password'])) {
			$errors['password'] = "Please fill in a password";
		}
		return $errors;
	}

}
