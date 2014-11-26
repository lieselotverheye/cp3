<div>
    <div id="welcome">
        <p><span class="name">Welcome <em><?php echo $_SESSION['user']['email'];?></em></span>
            <span class="logout"><a href="index.php?page=logout">logout</a></span></p>
    </div>

    <div id="addTodo">
        <h2>Add new Todo</h2>

        <form method="post" action="index.php">
            <fieldset>
                <legend>add</legend>
                <div>
                    <label for="title">Title</label>
                    <input class="<?php if(!empty($errors['title'])) echo 'has-error'; ?>" type="text" id="title" name="title"/>
                    <span class="error-message<?php if(empty($errors['title'])) echo ' hidden';?>" data-for="title"><?php
                    if(empty($errors['title'])) echo 'Please enter the title';
                    else echo $errors['title'];
                    ?></span>
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority">
                        <option value="1">Low Priority</option>
                        <option value="2">Medium Priority</option>
                        <option value="3">High Priority</option>
                    </select>
                </div>
                <div>
                    <input type="submit" name="action" value="Add">
                </div>
            </fieldset>
        </form>

    </div>

    <div id="todoList">

        <h2>Your Todo List</h2>

        <!-- voorbeeld, moet dynamisch worden.. -->
        <ul>
            <?php
            
            $priority = array(
                '1' => 'Low',
                '2' => 'Medium',
                '3' => 'High');
            if(!empty($todos)){
                foreach($todos as $todo){
                    echo "<li class='priority".$todo['priority']."' id='".$todo['id']."'>".$todo['title']." - ".$priority[$todo['priority']]." Priority
                    <a class='delete' href='index.php?page=delete-todo&amp;id=".$todo['id']."'>done</a></li>";
                }
            }
            else{
                echo "No todos.";
            }

            ?>
        </ul>

        <!-- indien leeg -->

        <!-- <p>[ no todos yet ]</p> -->

    </div>
</div>